/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function(words, maxWidth) {
    let result = [];
    let i = 0;

    while (i < words.length) {
        let line = [];
        let length = 0;

        while (i < words.length &&
               length + words[i].length + line.length <= maxWidth) {
            line.push(words[i]);
            length += words[i].length;
            i++;
        }

        if (i === words.length || line.length === 1) {
            let text = line.join(" ");
            result.push(text.padEnd(maxWidth, " "));
        } else {
            let spaces = maxWidth - length;
            let gaps = line.length - 1;
            let text = "";

            for (let j = 0; j < line.length; j++) {
                text += line[j];

                if (j < gaps) {
                    let count = Math.floor(spaces / gaps);

                    if (j < spaces % gaps) {
                        count++;
                    }

                    text += " ".repeat(count);
                }
            }

            result.push(text);
        }
    }

    return result;
};
