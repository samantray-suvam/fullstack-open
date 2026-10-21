const Hello = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        Hello {props.name}, are you {props.age} years old ?
      </p>
    </div>
  );
};

const Home1A = () => {
  const name = "Satya";
  const age = 45;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Chithra" age={age - 5} />
    </div>

    
  );
};

// Printing in Objects

// const Home1A = () => {
//   const friends = [
//     { name: "Satya", age: 45 },
//     { name: "Chithra", age: 40 },
//     { name: "Sanjay", age: 20 },
//   ];

//   return (
//     <div>
//       <p>
//         {friends[0].name} {friends[0].age}
//       </p>
//       <p>
//         {friends[1].name} {friends[1].age}
//       </p>
//       <p>
//         {friends[2].name} {friends[2].age}
//       </p>
//     </div>
//   );
// };

export default Home1A;
