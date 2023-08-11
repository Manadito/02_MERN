const Results = (props) => {
  return (
    <div>
      {props.value ? (
        <pre>
          <h1> {props.value.name} </h1>
          {/* Object.keys(obj) is a static method returning an array of an object's enumerable string-keyed prop names*/}
          {/* Array.slice([beg [, end]]) is a method that returns a copy of a portion of an array*/}
          {Object.keys(props.value)
            .slice(0, 4)
            .map((key) => (
              <p key={key}>
                {key}: {props.value[key]}
              </p>
            ))}
        </pre>
      ) : null}
    </div>
  );
};

export default Results;
