const s = require("underscore.string");

const contentController = {
    transformTextToObject: function (data) {
        let erg = contentController.getParagraphs(data);
        erg = contentController.getSentences(erg);
        erg = contentController.getWords(erg);
        return erg;
    },
    getParagraphs: data => {
        return s(data).lines();
    },
    getSentences: data => {
        return data.map(sentence => sentence.split(/[.?!]+/));
    },
    getWords: data => {
        const words = data.map(sentence =>
            sentence.map(wordsInSentence => {
                return wordsInSentence
                    .replace(")", " )")
                    .replace("(", "( ")
                    .replace(", ", " , ")
                    .split(" ");
            })
        );
        return words;
    }
};

module.exports = contentController;