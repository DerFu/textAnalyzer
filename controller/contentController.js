const contentController = {
    transformTextToObject: (text) => text.split('\n')
        .map(paragraph => paragraph.match(/([\S\s]+?)[.!?]/g))
        .map(paragraph => paragraph.map(sentence => {
            const regex = new RegExp(/[.|?|!]/g);
            const sSplit = sentence.split(regex)[0]
                .replace(',', ' ,')
                .replace(':', ' :')
                .replace(';', ' ;')
                .replace(')', ' )')
                .replace('(', '( ')
                .split(' ');
            sSplit.push(sentence.match(regex)[0])
            return sSplit.filter(s => !!s).map(s => s);w
        }))
}

module.exports = contentController;