export interface MCQQuestion {
    questionText: string;
    options: MCQQuestionOption[];
    answer: string;
    correctOption: string;
}

export interface MCQQuestionOption {
    optionId: string;
    optionValue: string;
}