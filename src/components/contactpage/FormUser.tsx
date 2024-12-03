export const FormUser = () => {
  return (
    <div className='space-y-2 w-full flex-shrink-0'>
      <h3>Información Personal</h3>
      <p>
        Para poder hacerte llegar el pedido necesito saber algunos datos sobre
        ti.
      </p>

      <div className='sm:col-span-3'>
        <label
          htmlFor='first-name'
          className='block text-sm/6 font-medium text-gray-900'
        >
          First name
        </label>
        <div className='mt-2'>
          <input
            id='first-name'
            name='first-name'
            type='text'
            autoComplete='given-name'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          />
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='first-name'
          className='block text-sm/6 font-medium text-gray-900'
        >
          First name
        </label>
        <div className='mt-2'>
          <input
            id='first-name'
            name='first-name'
            type='text'
            autoComplete='given-name'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          />
        </div>
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='first-name'
          className='block text-sm/6 font-medium text-gray-900'
        >
          First name
        </label>
        <div className='mt-2'>
          <input
            id='first-name'
            name='first-name'
            type='text'
            autoComplete='given-name'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          />
        </div>
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='first-name'
          className='block text-sm/6 font-medium text-gray-900'
        >
          First name
        </label>
        <div className='mt-2'>
          <input
            id='first-name'
            name='first-name'
            type='text'
            autoComplete='given-name'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          />
        </div>
      </div>
      <div className='sm:col-span-3'>
        <label
          htmlFor='first-name'
          className='block text-sm/6 font-medium text-gray-900'
        >
          First name
        </label>
        <div className='mt-2'>
          <input
            id='first-name'
            name='first-name'
            type='text'
            autoComplete='given-name'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          />
        </div>
      </div>
      <div className='sm:col-span-4'>
        <label
          htmlFor='email'
          className='block text-sm/6 font-medium text-gray-900'
        >
          Email address
        </label>
        <div className='mt-2'>
          <input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
          />
        </div>
      </div>
    </div>
  )
}
