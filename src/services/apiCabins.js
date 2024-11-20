import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not loaded.');
  }

  return data;
}

export async function createEditCabin(newData, id) {
  // https://ygfbucaedbrizmotqyne.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const hasImagePath = newData.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newData.image.name}`.replaceAll(
    '/',
    '',
  );
  //1)create imagePath
  const imagePath = hasImagePath
    ? newData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');
  // A) CREATE
  if (!id) query = query.insert([{ ...newData, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newData, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created.');
  }
  if (hasImagePath) return data;
  // 2) upload image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newData.image);

  // 3) Delete cabin if there was an error
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', newData.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created',
    );
  }
  return data;
}

export async function deleteCabins(id) {
  const { error, data } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not deleted.');
  }

  return data;
}
