// 首字大寫(句子)

const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
// 首字大寫(單字)
const publication = "freeCodeCamp";
publication[0].toUpperCase() + publication.substring(1);