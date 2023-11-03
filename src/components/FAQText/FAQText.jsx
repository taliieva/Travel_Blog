export default function FAQText(){
    const questions = [
        "What are the best tips for finding budget-friendly travel accommodations?",
        "How can I find authentic local experiences when traveling?",
        "What should I pack for a long-term trip or backpacking adventure?",
        "What are some strategies for overcoming jet lag when traveling across time zones?",
        "What are the visa requirements for popular tourist destinations?"
    ];
    const num = ['01','02','03','04','05'];
    return(
        <div>
            <ul>
                {questions.map(({question,index})=>{
                    <li key={index}>
                        <span>{num[index]}</span> {question}
                    </li>
                })}
            </ul>
        </div>
    )
}