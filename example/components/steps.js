export const steps = [
    {
      id: 'postcodeQuestion',
      message: 'What\'s your postcode?',
      trigger: 'postcode',
    },
    {
      id: 'postcode',
      user: true,
      trigger: 'addressLookup',
      placeholder: 'e.g BH1 3NE',
      metadata: {
        label: 'Edit your postcode',
      }
    },
    {
      id: 'addressLookup',
      user: false,
      delay:300,
      trigger: 'address',
      asyncAddressLookup: true,
      placeholder: 'e.g BH1 3NE',
      metadata: {
        label: 'Edit your postcode',
      },
    },
    {
      id: 'address',
      message: ({ previousValue, steps }) => `Thanks, your address is: ${previousValue}`,
      trigger: 'end',
    },
    {
      id: 'end',
      message: 'Thanks! Your appliation was submitted!',
      end: true,
    },
  ]
