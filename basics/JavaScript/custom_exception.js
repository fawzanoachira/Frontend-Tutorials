let a = 17;

try {
    if (a >= 18) {
        console.log("You can vote");
    } else {
        throw "You can't vote";
    }
} catch (e) {
    console.log(e);
}