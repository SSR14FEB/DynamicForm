const formComponents = [
  {
    id: "Heading",
    name: "Heading",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <h1
          type="text"
          className=" p-1 w-full rounded text-xs"
          placeholder="Enter student name"
          {...props}
        >
          Heading
          </h1>
      </div>
    ),
  },
  {
    id: "studentName",
    name: "Student Name",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">
          Student Name
        </label>
        <input
          type="text"
          className="border p-1 w-full rounded text-xs"
          placeholder="Enter student name"
          {...props}
        />
      </div>
    ),
  },
  {
    id: "dob",
    name: "Date of Birth",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          className="border p-1 w-full rounded text-xs"
          {...props}
        />
      </div>
    ),
  },
  {
    id: "parentName",
    name: "Parent/Guardian Name",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">
          Parent/Guardian Name
        </label>
        <input
          type="text"
          className="border p-1 w-full rounded text-xs"
          placeholder="Enter parent/guardian name"
          {...props}
        />
      </div>
    ),
  },
  {
    id: "classSelection",
    name: "Class Selection",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">Class</label>
        <select className="border p-1 w-full rounded text-xs" {...props}>
          <option value="">Select Class</option>
          <option value="Nursery">Nursery</option>
          <option value="KG">KG</option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
        </select>
      </div>
    ),
  },
  {
    id: "contactNumber",
    name: "Contact Number",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          className="border p-1 w-full rounded text-xs"
          placeholder="Enter contact number"
          {...props}
        />
      </div>
    ),
  },
  {
    id: "address",
    name: "Address",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">
          Address
        </label>
        <textarea
          className="border p-1 w-full rounded text-xs"
          placeholder="Enter address"
          {...props}
        ></textarea>
      </div>
    ),
  },
  {
    id: "gender",
    name: "Gender",
    element: (props) => (
      <div className="  cursor-grab w-full">
        <label className="block text-xs font-medium text-gray-700">
          Gender
        </label>
        <select className="border p-1 w-full rounded text-xs" {...props}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    ),
  },
  {
    id: "submit",
    name: "Submit Button",
    element: () => (
      <button className="px-3 py-1 bg-green-500 text-white text-xs rounded">
        Submit
      </button>
    ),
  },
];
export default formComponents