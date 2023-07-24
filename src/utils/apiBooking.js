import { supabase } from '../../supabase';

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from('reservations')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
}
