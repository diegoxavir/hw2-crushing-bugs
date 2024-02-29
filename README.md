# Drag and Drop Reference

This webpage hosts a puzzle game featuring 4 different boards! These boards consist of a tree house in the woods, a fort in a field, a view of a planet from space, and two mechanical beings looking at one another. Just drag a piece from the left into the blurred out board on the right to place the piece. To change the board click on the images below. 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Set up by Tina Vandervecht
Bugs fixed by Diego Rodriguez-Ramos

## License
MIT

## Bug Fix Plan 
The problem for bug 1 is that puzzle pieces are able to stack upon one another in the puzzle board. To solve this I need to tell the javascript that onoly one peice can take up the space of an individual dropzone. To solve this in the
javascript I will refer to another in calss build regarding "if functions" for grades, and attempt to apply those principals to the puzzle board.

Problem 2 is that the peices position do not reset when a board is chosen. To fix this I will attempt to reset the piece by telling the javascript to use existing functions to return the pieces to where they came from.
After much trial and error I could not get the original soloution to work, so I will now instead tell Javascript to place the pieces into areas with a ".puzzlepieces" class using appendchild like we did to put it into the dropzone, rather than to return to their original location. They are the same end point, but Javascripts understanding of how the pieces got there will change.

For the first bonus bug I am going to do an if command in the change background image function to change the piece image source depending on the background image id.

For the second Bonus bug I am goint to make a new function that takes the reset buttom and applies the same reset string from the change background image function.

For bonus bug 3, the a piece is moved to the board when the change background image buttons are dragged to the board. To prevent this I will add an if to the dragged pieces, that if the piece has an ID of "buttonHolder", that it is to return.

Update: While bonus bug 3 is initially fixed, it only worked for if there are no pieces alerady on the board. Now, the background buttons will moved whatever piece was last touched, meaning that the bonus bug 3 returns if the reset button was used after a piece was interacted with.