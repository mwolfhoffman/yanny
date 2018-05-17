var Yanny = function () {
    this.isYanny = function () {
        return true;
    }

    this.isLaurel = function () {
        return false;
    }
}

var Laurel = function () {
    this.isYanny = function () {
        return false;
    }

    this.isLaurel = function () {
        return true;
    }
}

module.exports = {
    Yanny,
    Laurel
};