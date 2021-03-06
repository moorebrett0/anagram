describe('anagram', function () {
    it('will return a match for letters that are the same', function() {
        expect(anagram("a", "a")).to.equal("is a match");
    });

    it('will return not a match for letters that are not the same', function() {
            expect(anagram('a', 'b')).to.equal("is not a match");
    });

    it('will return all possible matches of a word', function() {
        expect(anagram('ab', 'ba')).to.equal("is a match");
    });
    it('will return a possible match if the word is partially correct', function () {
        expect(anagram("batch", "bat")).to.equal("is a partial match");
    });
});
