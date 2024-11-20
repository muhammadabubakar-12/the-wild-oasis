import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //  1. number of bookings
  const numBookings = bookings.length;

  //   2. total sales
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  //   3. total check-ins
  const checkins = confirmedStays.length;

  //   4. number of checked in nights / all available nights (numDays * number of cabins)
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title={'Bookings'}
        value={numBookings}
        color={'blue'}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title={'Sales'}
        value={formatCurrency(sales)}
        color={'green'}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title={'Check ins'}
        value={checkins}
        color={'indigo'}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title={'Occupancy rate'}
        value={Math.round(occupation * 100) + '%'}
        color={'yellow'}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
