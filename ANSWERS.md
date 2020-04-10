- [ ] Why would you use class component over function components (removing hooks from the question)?

as far as I can tell there is no reason to use class over function, unless you are joining a code base that already uses functions.

- [ ] Name three lifecycle methods and their purposes.

constructor: this incites the function with data for the initial render

render: this is used to tell react to return some piece of the DOM

componentDidMount: this is what happens immediately after the component is rendered for the first time. This can be to add async data to state and rerender.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to reuse bits of code that would otherwise be specific to single components/elements

- [ ] Why is it important to test our apps?

to find buggy code before it gets used.