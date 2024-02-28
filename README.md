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

The problem for bug 1 is that puzzle pieces are able to stack upon one another in the puzzle board. To solve this I need to tell the JavaScript that only one piece can take up the space of an individual dropzone. To solve this in the
JavaScript I will refer to another in class build regarding "if functions" for grades, and attempt to apply those principals to the puzzle board.


Problem 2 is that the pieces position do not reset when a board is chosen. To fix this I will attempt to reset the piece by telling the JavaScript to use existing functions to return the pieces to where they came from.
After much trial and error I could not get the original solution to work, so I will now instead tell JavaScript to place the pieces into areas with a ".puzzlepieces" class using appendchild like we did to put it into the dropzone, rather than to return to their original location. They are the same end point, but JavaScript's understanding of how the pieces got there will change.