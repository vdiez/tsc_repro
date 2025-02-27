import ts from 'typescript';

const program = ts.createProgram(['test.js'], {
  allowJs: true,
  noImplicitAny: true
});

const sourceFile = program.getSourceFile('test.js');
program.getTypeChecker().getSuggestionDiagnostics(sourceFile);
