function App() {
  const handleInput = () => {};
  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col gap-2 border py-1 px-4">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">
            About You
          </legend>
          <div>
            <label className="text-3xl font-semibold">What's your name?</label>
            <input
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-2 focus:outline-indigo-200"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={handleInput}
            />
            <input
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">What's your email?</label>
            <input
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-2 focus:outline-indigo-200"
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">
              What's your date of birth?
            </label>
            <input
              className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-2 focus:outline-indigo-200"
              id="dob"
              name="dob"
              type="date"
              max="2005-01-31"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-3xl font-semibold">
              What's your gender?
            </label>
            <select
              className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-2 focus:outline-indigo-200"
              id="gender"
              name="gender"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="MTF">MTF</option>
              <option value="FTM">FTM</option>
              <option value="Non-Binary">Non-binary</option>
            </select>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
