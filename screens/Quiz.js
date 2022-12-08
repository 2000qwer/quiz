import React, { useEffect , useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Result from "./Result";
/*
const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
*/

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [score, setScore]= useState(0);
    const [options, setOptions]= useState([])

    const getQuiz = ()=> {
     const arrayQuestions = 
      {
        "results": [
        {
        "question": "What does &quot;hippopotamus&quot; mean and in what langauge?",
        "correct_answer": "River Horse (Greek)",
        "incorrect_answers": [
          "River Horse (Latin)",
          "Fat Pig (Greek)",
          "Fat Pig (Latin)"]
        },
        {
        "question": "What is the nickname of Northampton town&#039;s rugby union club?",
        "correct_answer": "Saints",
        "incorrect_answers": [
          "Harlequins",
          "Saracens",
          "Wasps"]
        },
        {
        "question": "Spain was formed in 1469 with the marriage of Isabella I of Castile and Ferdinand II of what other Iberian kingdom?",
        "correct_answer": "Aragon",
        "incorrect_answers": [
          "Galicia",
          "Le&oacute;n",
          "Navarre"
        ]
        },
        {
        "question": "Which Native American tribe/nation requires at least one half blood quantum (equivalent to one parent) to be eligible for membership?",
        "correct_answer": "Yomba Shoshone Tribe",
        "incorrect_answers": [
          "Standing Rock Sioux Tribe",
          "Kiowa Tribe of Oklahoma",
          "Pawnee Nation of Oklahoma"
        ]
        },
        {
        "question": "What animation studio produced &quot;Gurren Lagann&quot;?",
        "correct_answer": "Gainax",
        "incorrect_answers": [
          "Kyoto Animation",
          "Pierrot",
          "A-1 Pictures"
        ]
        },
        {
        "question": "In the Kingdom Hearts series, which is not an optional boss you can fight?",
        "correct_answer": "Master Yen Sid",
        "incorrect_answers": [
        "Sephiroth",
        "Julius",
        "Kurt Zisa"
        ]
        },
        {
        "question": "The emblem on the flag of the Republic of Tajikistan features a sunrise over mountains below what symbol?",
        "correct_answer": "Crown",
        "incorrect_answers": [
        "Bird",
        "Sickle",
        "Tree"
        ]
        },
        {
        "question": "In the MMO RPG &quot;Realm of the Mad God&quot;, what dungeon is widely considered to be the most difficult?",
        "correct_answer": "The Shatter&#039;s",
        "incorrect_answers": [
        "Snake Pit",
        "The Tomb of the Acient&#039;s",
        "The Puppet Master&#039;s Theater"
        ]
        },
        {
        "question": "What was Bon Iver&#039;s debut album released in 2007?",
        "correct_answer": "For Emma, Forever Ago",
        "incorrect_answers": [
        "Bon Iver, Bon Iver",
        "22, A Million",
        "Blood Bank EP"
        ]
        },
        {
        "question": "What is the name for the auditory illusion of a note that seems to be rising infinitely?",
        "correct_answer": "Shepard Tone",
        "incorrect_answers": [
        "Glissandro Illusion",
        "Fransen Effect",
        "McGurck Effect"
        ]
        }
        ]
      };
        console.log(arrayQuestions["results"][ques])
                  //const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
                  //const res = await fetch(url);
                  //console.log(res);
                  //const data = await res.json();
                  //console.log(data.results);
                   //setQuestions(data.results);
      setQuestions(arrayQuestions["results"]);
    };

    useEffect(()=>{
        getQuiz();
    }, []);

    const handleNextPress = () => {
        setQues(ques+1);
    }

    /*
    const generateOptionsAndShuffle=(_question)=>{
      const options= [..._question.incorrect_answers]
      options.push(_question.correct_answer)
   
      shuffleArray(options)
      
      return options
    }
  */
    
    const handleShowResult=()=>{
      navigation.navigate('Result', {
        score: score
      })
    }



    const handlSelectedOption = (_option)=>{
      
      //console.log(score);
      //console.log(questions[ques].correct_answer)
      //console.log(_option);
      //console.log(score);
      if(_option===questions[ques].correct_answer){
        setScore(score+10);
      }
      if(ques!==9){
        setQues(ques+1)
        //handleNextPress();
        //setOptions(generateOptionsAndShuffle(questions[ques+1]))
      }
      if(ques===9){
        handleShowResult()
      }
 
    }

  return (

    /*<View style={styles.container}>
    {questions &&(
    <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>{questions[ques].question}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{questions[ques].incorrect_answers[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{questions[ques].incorrect_answers[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{questions[ques].incorrect_answers[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>{questions[ques].correct_answer}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>End</Text>
        </TouchableOpacity>
        {ques!==9 &&
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        }
       </View>
      </View>
    )}
    </View>
    */

    <View style={styles.container}>
      {questions &&(
      <View style={styles.parent}>
        <View style={styles.top}>
        <Text style={styles.question}>{questions[ques].question}</Text>
        </View>
        <View style={styles.options}>
            
          <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(questions[ques].incorrect_answers[0])}>
          <Text style={styles.option}>{questions[ques].incorrect_answers[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(questions[ques].incorrect_answers[1])}>
          <Text style={styles.option}>{questions[ques].incorrect_answers[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(questions[ques].incorrect_answers[2])}>
          <Text style={styles.option}>{questions[ques].incorrect_answers[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={()=>handlSelectedOption(questions[ques].correct_answer)}>
          <Text style={styles.option}>{questions[ques].correct_answer}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>PREV</Text>
          </TouchableOpacity> */}

          {ques!==9 &&<TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity> 
          }

          {ques!==9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          }

          {ques===9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
            <Text style={styles.buttonText}>SHOW RESULTS</Text>
          </TouchableOpacity> }
          
        </View>
      </View>
    )}
  </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,

  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  button:{
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',

  },
  buttonText:{
    fontSize: 18,  
    fontWeight: '600',
    color: '#ffffff',
  },
  question:{
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
  optionButton:{
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
