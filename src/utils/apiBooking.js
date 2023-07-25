import { supabase } from '../../supabase';

export async function createBooking(formData) {
  const { data, error } = await supabase.from('reservations').insert(formData);
  if (error) {
    console.error(error);
    throw new Error('Failed to create reservations.');
  }
  return data;
}

export async function fetchReservations() {
  let { data, error } = await supabase.from('reservations').select('*');
  //   .eq('user_id', userFormData.userData.id);
  if (error) {
    console.error(error);
    throw new Error('Failed to fetch reservations.');
  }
  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from('reservations')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Reservation could not be deleted');
  }
  return data;
}
