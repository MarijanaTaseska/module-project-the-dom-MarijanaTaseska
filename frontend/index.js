/* eslint-disable no-undef */


function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
     const widget = document.querySelectorAll("section>div");
     widget.forEach((widget,idx)=>{
      widget.classList.add("widget")
      widget.setAttribute("tabindex",idx + 1)

     })



  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here

// eslint-disable-next-line no-undef
const randomIdx = Math.floor(Math.random()*quotes.length);
// eslint-disable-next-line no-undef
const randomQuote = quotes[randomIdx];
const quote = document.createElement("div");
const quoteText = randomQuote.quote;
quote.textContent = quoteText;
const widget1 = document.querySelector(".quoteoftheday");
widget1.appendChild(quote);

const authorDate = document.createElement("div");
const {author, date} = randomQuote;
authorDate.textContent = `${author} in ${date || "an unknown date"}`
widget1.appendChild(authorDate);



  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
   const verb1 = verbs[Math.floor(Math.random()*verbs.length)];
   const verb2 = verbs[Math.floor(Math.random()*verbs.length)];

   const noun1 = nouns[Math.floor(Math.random()*nouns.length)];
   const noun2 = nouns[Math.floor(Math.random()*nouns.length)];

   const adverb1 = adverbs[Math.floor(Math.random()*adverbs.length)];
   const adverb2 = adverbs[Math.floor(Math.random()*adverbs.length)];

   const newParagraph = document.createElement("p");
   newParagraph.textContent =`We need to ${verb1} our ${noun1} ${adverb1}
   in order to ${verb2} our ${noun2} ${adverb2}.`

   const corporatespeak = document.querySelector(".corporatespeak");
   corporatespeak.appendChild(newParagraph);





  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
const countdownWidget = document.querySelector(".countdown")
 let count = 5;

 const countdown = document.createElement("p");
 countdown.textContent = `T-minus 5...`;
 countdownWidget.appendChild(countdown);

const id =setInterval(()=>{
  if(count === 1){
    countdown.textContent = `Liftoff! 🚀`
  clearInterval(id)
  }else{
    countdown.textContent = `T-minus ${--count}...`
  }
 },1000);


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random()*people.length)]
  

  const personParagraph = document.createElement("p");
  document.querySelector(".friends").appendChild(personParagraph);
  const year = person.dateOfBirth.split("-")[0];
  
  
  let sentence = `${person.fname} ${person.lname} was born in ${year} and `
 if(!person.friends.length){
  sentence+= `has no friends.`;
 }else{
  sentence += "is friends with "
  for(let i=0;i<person.friends.length;i++){
    const friendId = person.friends[i];
    const friend = people.find(p=>p.id === friendId )
    const fullName = `${friend.fname} ${friend.lname}`
   
    let lastindx = i === person.friends.length-1;
    let NextToLast = i === person.friends.length-2;

    if(lastindx){
      sentence += `${fullName}.`
    }else if(NextToLast){
sentence += `${fullName} and `
    }else{
      sentence += `${fullName}, `
    }
  }
 }

 personParagraph.textContent = sentence;
 

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
