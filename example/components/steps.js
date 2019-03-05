  export const steps = [
    {
      id: 'genderQuestion',
      message: 'What is your title?',
      trigger: 'gender',
    },
    {
      id: 'gender',
      options: [
        { value: 'Mr', label: 'Mr', trigger: 'ageQuestion' },
        { value: 'Mrs', label: 'Mrs', trigger: 'ageQuestion' },
        { value: 'Miss', label: 'Miss', trigger: 'ageQuestion' },
      ],
      metadata: {
        label: 'Edit your gender',
      }
    },
    {
      id: 'ageQuestion',
      message: 'How old are you?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      trigger: 'end-message',
      metadata: {
        label: 'Edit your name',
        suffix: 'years',
      }
    },  
    {
      id: 'end-message',
      message: 'Thanks! Your data was submitted successfully!',
      end: true,
    },
  ]