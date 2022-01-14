// rural, semi-rural, suburban, urban
// farm, house, apartment, dorm||hotel etc.
// lots of outdoor land, medium outdoor land, some outdoor land, no outdoor land
// >10 sunny windows, >5<10 sunny windows, >1<5 sunny windows, >0<1 sunny windows


const QuestionTree = [
  {
    question: "What word best describes the area where you live?",
    option1: "Rural",
    option2: "Semi-Rural",
    option3: "Suburban", 
    option4: "Urban" 
  },
  {
    question: "Which of the following best describes your current living situation?",
    option1: "Farm",
    option2: "House",
    option3: "Apartment", 
    option4: "Dorm, Hotel, Airbnb, or another kind of temporary or shared living space."
  },
  {
    question: "How much outdoor land could you plant on?",
    option1: "A huge amount of outdoor land (more than 5 acres)",
    option2: "A large amount of outdoor land (between 1/2 and 5 acres)",
    option3: "Some outdoor land or balcony area (total outdoor area under 1/2 acre)", 
    option4: "No outdoor land"
  },
  {
    question: "How many windows that receive regular sunshine could you plant in?",
    option1: "More than 10 (~ 4ft x 4ft) window areas that receive regular sunshine",
    option2: "Between 5 and 10 (~ 4ft x 4ft) window areas that receive regular sunshine",
    option3: "Between 1 and 5 (~ 4ft x 4ft) window areas that receive regular sunshine", 
    option4: "At least 1 (~ 4ft x 4ft) window area that receives regular sunshine"
  }
]

export default QuestionTree;