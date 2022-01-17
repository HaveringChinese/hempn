// rural, semi-rural, suburban, urban
// farm, house, apartment, dorm||hotel etc.
// lots of outdoor land, medium outdoor land, some outdoor land, no outdoor land
// >10 sunny windows, >5<10 sunny windows, >1<5 sunny windows, >0<1 sunny windows


const QuestionTree = [
  {
    question: "Which of the following best describes the area where you live?",
    option1: "Along the equator (latitudes -5 to 5)",
    option2: "Tropical or near the equator (latitudes -30 to -5 and 5 to 30)",
    option3: "Temperate or middle distance from the equator and poles (latitudes -60 to -30 and 30 to 60)", 
    option4: "Polar or far from the equator (latitudes -90 to -60 and 60 to 90)" 
  },
  {
    question: "Which of the following best describes your current living situation?",
    option1: "Farm",
    option2: "Non-farm house",
    option3: "Apartment", 
    option4: "Dorm, Hotel, Airbnb, or another kind of temporary or shared living space."
  },
  {
    question: "How much outdoor land do you have access to for planting?",
    option1: "A huge amount of outdoor land (more than 5 acres)",
    option2: "A large amount of outdoor land (between 1/2 and 5 acres)",
    option3: "Some outdoor land, rooftop, or balcony area (total outdoor area under 1/2 acre)", 
    option4: "No outdoor land"
  },
  {
    question: "How many windows could you plant in that receive regular sunshine?",
    option1: "More than 10 (~ 4ft x 4ft) window areas that receive regular sunshine",
    option2: "Between 5 and 10 (~ 4ft x 4ft) window areas that receive regular sunshine",
    option3: "Between 1 and 5 (~ 4ft x 4ft) window areas that receive regular sunshine", 
    option4: "At least 1 (~ 4ft x 4ft) window area that receives regular sunshine"
  }
]

export default QuestionTree;