export const FormFields = [
    { key: "name", label: "Name", props: { required: true } },
    { key: "age", label: "Age", type: "number" },
    {
      key: "rating",
      label: "Rating",
      type: "number",
      props: { min: 0, max: 5 }
    },
    {
      key: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { key: "male", label: "Male", name: "gender", value: "male" },
        {
          key: "female",
          label: "Female",
          name: "gender",
          value: "female"
        }
      ]
    },
    { key: "qualification", label: "Qualification" },
    {
      key: "city",
      label: "City",
      type: "select",
      value: "Kerala",
      options: [
        { key: "mumbai", label: "Mumbai", value: "Mumbai" },
        { key: "bangalore", label: "Bangalore", value: "Bangalore" },
        { key: "kerala", label: "Kerala", value: "Kerala" }
      ]
    },
    // {
    //   key: "skills",
    //   label: "Skills",
    //   type: "checkbox",
    //   options: [
    //     { key: "reactjs", label: "ReactJS", value: "reactjs" },
    //     { key: "angular", label: "Angular", value: "angular" },
    //     { key: "vuejs", label: "VueJS", value: "vuejs" }
    //   ]
    // }
  ]