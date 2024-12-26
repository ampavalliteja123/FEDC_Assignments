// define sentence builder object 
let sentenceBuilder = {
    subject : "I",
    verb : "am",
    object : "coding",

    // method to build the sentence 
    buildSentence:function(){
        //use ternary operates to check if properties are present
        return this.subject && this.verb && this.object
        ?`${this.subject} ${this.verb} ${this.object}`
        : "Incomplete sentence";
    },

    // method to update a property dynamically
    updateProperty:function(property,value){
        //check if the property exists
        if(this.hasOwnProperty(property)){
            // update the property
            this[property] = value;
            //No need to return a message on success
            return;
        }
        else{
            // return error for invalid properties
            return "Invalid property";
        }
    }
};

// example 1
console.log(sentenceBuilder.buildSentence());
// the output comes example 1 :"I am coding"

// example 2
sentenceBuilder.updateProperty("verb","am Learning");
console.log(sentenceBuilder.buildSentence());
// the output comes example 2 : "I am Learning coding"

//example 3
sentenceBuilder.updateProperty("subject","The cat");
console.log(sentenceBuilder.buildSentence());
//the output comes example 3 : "The Cat am Learning coding"

//example 4
console.log(sentenceBuilder.updateProperty("mood","happy"));
// the output comes example 4 : "Invalid property"

//example 5
sentenceBuilder.updateProperty("verb","");
console.log(sentenceBuilder.buildSentence());
// the output comes Example 5 : "Incomplete sentence"