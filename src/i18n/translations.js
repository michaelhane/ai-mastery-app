export const translations = {
  en: {
    // Dashboard
    appTitle: 'AI Mastery Roadmap',
    appSubtitle: '24 units to master Claude Code',
    howToUse: 'How to Use',
    step1: 'Click a level below to expand and see its units',
    step2: 'Click a unit to open the lesson content',
    step3: 'Read the Learn section (~5 min) then do the Practice exercises (~15 min)',
    step4: 'Mark as Complete when done - repeat 3x for mastery',
    cliTip: 'Also works in Claude Code CLI: use',
    overallProgress: 'Overall Progress',
    unitsCompleted: 'units completed',
    complete: 'complete',
    minInvested: 'min invested',
    exportProgress: 'Export Progress',

    // Level descriptions
    'level-1-prompts': 'Master prompt foundations - Save 2-4 hrs/week',
    'level-2-commands': 'Master slash commands - Save 4-6 hrs/week',
    'level-3-composition': 'Master MCP & sub-agents - Save 6-10 hrs/week',
    'level-4-skills': 'Master autonomous skills - Save 15-25 hrs/week',

    // Lesson View
    learn: 'Learn',
    practice: 'Practice',
    learnTime: 'Learn',
    practiceTime: 'Practice',
    min: 'min',
    completed: 'Completed',
    startPractice: 'Start Practice →',
    backToDashboard: 'Back to Dashboard',
    back: '← Back',

    // Practice Mode
    practiceMode: 'Practice Mode',
    exercise: 'Exercise',
    of: 'of',
    rewriteVaguePrompt: 'Rewrite This Vague Prompt',
    writeClearPrompt: 'Write a Clear Prompt',
    vague: 'Vague',
    task: 'Task',
    rewriteInstruction: 'Rewrite this vague prompt to be clear using Action + Target + Details',
    writeInstruction: 'Write a clear prompt for this task',
    placeholder: 'Write your clear prompt here...',
    checkAnswer: 'Check My Answer',
    previous: '← Previous',
    next: 'Next →',

    // Feedback
    score: 'Score',
    hasActionVerb: '✓ Has clear action verb',
    missingActionVerb: '✗ Missing action verb (Read, Search, Find, List, Check...)',
    specifiesTarget: '✓ Specifies target',
    tooShort: '✗ Too short - specify what to work with',
    includesDetails: '✓ Includes details/format',
    addDetails: '✗ Add details about format or what to include',
    exampleGoodAnswer: 'Example good answer:',
    pleaseWriteAnswer: 'Please write an answer',

    // Checklist
    successChecklist: 'Success Checklist',
    checklistInstruction: 'Check off each item when you can honestly say you\'ve achieved it:',
    readyToComplete: '✓ Ready to complete!',
    completeAllItems: 'Complete all checklist items to finish',
    markUnitComplete: 'Mark Unit Complete',
    timeSpent: 'spent',
    backToLesson: '← Back to Lesson',
    noExercisesFound: 'No exercises found in this lesson.',

    // Good examples (keep prompts in English as they're code-related)
    goodExamples: {
      "Show dependencies": "Read package.json and list all dependencies in a table with name and version",
      "Find bugs": "Search all .ts files in src/ for potential null pointer errors and list file, line number, and the problematic code",
      "Check tests": "Run all test files in tests/ directory and report which tests pass, fail, or are skipped with their names",
      "List functions": "Find all exported functions in src/utils/ and list them with file name, function name, and parameter count",
      "Review code": "Check src/components/Button.tsx for unused variables, missing types, and functions over 30 lines"
    }
  },

  nl: {
    // Dashboard
    appTitle: 'AI Mastery Roadmap',
    appSubtitle: '24 lessen om Claude Code te beheersen',
    howToUse: 'Hoe te gebruiken',
    step1: 'Klik op een niveau hieronder om de lessen te bekijken',
    step2: 'Klik op een les om de inhoud te openen',
    step3: 'Lees de Leer-sectie (~5 min) en doe daarna de Oefen-opdrachten (~15 min)',
    step4: 'Markeer als Voltooid wanneer klaar - herhaal 3x voor beheersing',
    cliTip: 'Werkt ook in Claude Code CLI: gebruik',
    overallProgress: 'Totale Voortgang',
    unitsCompleted: 'lessen voltooid',
    complete: 'voltooid',
    minInvested: 'min geïnvesteerd',
    exportProgress: 'Exporteer Voortgang',

    // Level descriptions
    'level-1-prompts': 'Beheers prompt fundamenten - Bespaar 2-4 uur/week',
    'level-2-commands': 'Beheers slash commands - Bespaar 4-6 uur/week',
    'level-3-composition': 'Beheers MCP & sub-agents - Bespaar 6-10 uur/week',
    'level-4-skills': 'Beheers autonome skills - Bespaar 15-25 uur/week',

    // Lesson View
    learn: 'Leren',
    practice: 'Oefenen',
    learnTime: 'Leren',
    practiceTime: 'Oefenen',
    min: 'min',
    completed: 'Voltooid',
    startPractice: 'Start Oefenen →',
    backToDashboard: 'Terug naar Dashboard',
    back: '← Terug',

    // Practice Mode
    practiceMode: 'Oefenmodus',
    exercise: 'Oefening',
    of: 'van',
    rewriteVaguePrompt: 'Herschrijf deze vage prompt',
    writeClearPrompt: 'Schrijf een duidelijke prompt',
    vague: 'Vaag',
    task: 'Taak',
    rewriteInstruction: 'Herschrijf deze vage prompt met Action + Target + Details',
    writeInstruction: 'Schrijf een duidelijke prompt voor deze taak',
    placeholder: 'Schrijf hier je duidelijke prompt...',
    checkAnswer: 'Controleer Antwoord',
    previous: '← Vorige',
    next: 'Volgende →',

    // Feedback
    score: 'Score',
    hasActionVerb: '✓ Heeft duidelijk actiewerkwoord',
    missingActionVerb: '✗ Actiewerkwoord ontbreekt (Read, Search, Find, List, Check...)',
    specifiesTarget: '✓ Specificeert target',
    tooShort: '✗ Te kort - specificeer waar je mee werkt',
    includesDetails: '✓ Bevat details/formaat',
    addDetails: '✗ Voeg details toe over formaat of wat je wilt zien',
    exampleGoodAnswer: 'Voorbeeld goed antwoord:',
    pleaseWriteAnswer: 'Schrijf een antwoord',

    // Checklist
    successChecklist: 'Succes Checklist',
    checklistInstruction: 'Vink elk item af wanneer je eerlijk kunt zeggen dat je het beheerst:',
    readyToComplete: '✓ Klaar om te voltooien!',
    completeAllItems: 'Voltooi alle checklist items om af te ronden',
    markUnitComplete: 'Markeer Les Voltooid',
    timeSpent: 'besteed',
    backToLesson: '← Terug naar Les',
    noExercisesFound: 'Geen oefeningen gevonden in deze les.',

    // Good examples - Dutch translations of example prompts
    goodExamples: {
      "Show dependencies": "Lees package.json en maak een lijst van alle dependencies in een tabel met naam en versie",
      "Find bugs": "Zoek in alle .ts bestanden in src/ naar potentiële null pointer fouten en geef bestand, regelnummer en de problematische code",
      "Check tests": "Draai alle testbestanden in de tests/ map en rapporteer welke tests slagen, falen of worden overgeslagen met hun namen",
      "List functions": "Vind alle geëxporteerde functies in src/utils/ en maak een lijst met bestandsnaam, functienaam en aantal parameters",
      "Review code": "Controleer src/components/Button.tsx op ongebruikte variabelen, ontbrekende types en functies langer dan 30 regels"
    }
  }
};

export const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
];
