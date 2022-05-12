class Player {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    };

    setBoard(board) {
        this.board = board;
    };

    getPlayerName() {
        return this.name;
    };

    draw(x, y) {
        this.board.drawOnBoard(x, y, this.mark);
        isChangeValue = true;
        playAudio();
        setFalse();
    };

    erase(x, y) {
        this.board.drawOnBoard(x, y, emptyValue);
        isDelete = true;
        playAudio();
        setFalse();
    };

    onWhichTeam() {
        return this.mark;
    };
};