// Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples
1 . Async 
The async function declaration defines an asynchronous function,
which returns an AsyncFunction object. An asynchronous function is a function
which operates asynchronously via the event loop, using an implicit Promise to return its result.

  async function name([param[, param[, ... param]]]) {
    statements
    }

2. Await

An async function can contain an await expression that pauses the execution of the async function
and waits for the passed Promise's resolution, and then resumes the async function's execution and
returns the resolved value.

Note: The await keyword is only valid inside async functions. If you use it outside of an async function's body,
you will get a SyntaxError.

3 . How and why we reached here to Async/Await

We had (we still have) callback methods. And calling a callback from inside a callback was like
 getting into a callback hell. It looked something like this:

myFunctionOne(a, b, callbackFunctionOne(dataA){
     myFunctionTwo(dataA, callbackFunctionTwo(dataB){
          myFunctionThree(dataB, callbackFunctionThree(){ ….. 
        }); }); });


This obviously was a difficult chunk of code to manage as it grew in size.
Promises, method chaining came to the rescue. And the syntax looked something like this:
//each function returns a promise 
myFunctionOne(a, b) 
.then(myFunctionTwo(resultA){}) 
.then(myFunctionThree(resultB){}) 
.then… .then… .catch(error => {});


This looked so much more clean. But wait, here comes async/await. 
What does this look like, well it simply executes line by line, looking just like the synchronous code!
 Here’s the syntax:
Wwe do declare the function to be async if it has asynchronous queries which will run sequentially 
let myFunctionParent = async function(){
// what’s more! there’s just one try catch
 try{ let resultA = await myFunctionOne();
     let resultB = await myFunctionTwo(); 
     …
     …
}catch(err){
     console.log(err); return; }
}

4. example

$("#btn").on("click", async () => {
    try {
      const user = await getUser('tylermcginnis')
      const weather = await getWeather(user.location)
  
      updateUI({
        user,
        weather,
      })
    } catch (e) {
      showError(e)
    }
  })