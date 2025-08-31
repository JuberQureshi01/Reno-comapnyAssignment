import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
    const router = useRouter();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage('');
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', data.image[0]);

    try {
      const response = await fetch('/api/addSchool', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('School added successfully!');
         router.push('/');
        reset();
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center text-black">
      <div className="bg-white p-8 md:px-40 rounded-lg shadow-md w-full max-w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Add a New School</h1>
        {message && <p className="mb-4 text-center text-sm text-green-600">{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">School Name</label>
            <input id="name" type="text" {...register('name', { required: 'School name is required' })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-black">Address</label>
            <input id="address" type="text" {...register('address', { required: 'Address is required' })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-black">City</label>
            <input id="city" type="text" {...register('city', { required: 'City is required' })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-black">State</label>
            <input id="state" type="text" {...register('state', { required: 'State is required' })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-black">Contact Number</label>
            <input id="contact" type="tel" {...register('contact', { required: 'Contact number is required' })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
          </div>
          
          <div>
            <label htmlFor="email_id" className="block text-sm font-medium text-black">Email ID</label>
            <input id="email_id" type="email" {...register('email_id', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            {errors.email_id && <p className="text-red-500 text-xs mt-1">{errors.email_id.message}</p>}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-black">School Image</label>
            <input id="image" type="file" accept="image/*" {...register('image', { required: 'Image is required' })} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"/>
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400">
            {isSubmitting ? 'Submitting...' : 'Add School'}
          </button>
        </form>
      </div>
    </div>
  );
}