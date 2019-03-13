export const steps = [
    {
      id: 'dobQuestion',
      message: 'What\'s your Date of birth?',
      trigger: 'dob',
    },
    {
      id: 'dob',
      user: true,
      trigger: 'postcodeQuestion',
      metadata: {
        label: 'edit DOB',
      },
      fields: {dd:{
          placeholder:'dd',
          type: 'number',
          len: 2,
          value: '',
        },
        mm: {
          placeholder:'mm',
          type: 'number',
          len: 2,
          value: '',
        },
        yyyy: {
          placeholder:'yyyy',
          type: 'number',
          len: 4,
          value: '',
        }
      },
      messageTemplate: 'dd/mm/yyyy' // maps from key names above ^^
      
    },
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
      user: false, // prevents triggering of input box
      delay: 300,
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
