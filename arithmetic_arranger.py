def arithmetic_arranger(problems, show_results=False):

    import operator

    ops = {'+':operator.add, '-':operator.sub}

    if len(problems) <= 5:

        answers = []
        line1 = ''
        line2 = ''
        dashes = ''
        solution = ''

        for item in problems:

            split_items = item.split()

            operand1 = split_items[0]
            operand2 = split_items[2]
            true_operator = split_items[1]

            if len(operand1) > 4 or len(operand2) > 4:
                return 'Error: Numbers cannot be more than four digits.'

            elif true_operator != '+' and true_operator != '-':
                return "Error: Operator must be '+' or '-'."

            elif not operand1.isnumeric() or not operand2.isnumeric():
                return 'Error: Numbers must only contain digits.'

            else:
                answers.append(ops[true_operator](int(operand1),int(operand2)))

                line_length = max(len(operand1), len(operand2)) + 2
                op = str(operand1).rjust(line_length)
                den = true_operator + str(operand2).rjust(line_length - 1)
                separator = ''
                last = str(answers[-1]).rjust(line_length)

                for i in range(line_length):
                    separator += '-'

                if item != problems[-1]:
                    line1 += op + '    '
                    line2 += den + '    '
                    dashes += separator + '    '
                    solution += last + '    '
                else:
                    line1 += op
                    line2 += den
                    dashes += separator
                    solution += last

        line1.rstrip()
        line2.rstrip()
        dashes.rstrip()

        if len(answers) != len(problems):
            pass
        else:
            if show_results:
                solution.rstrip()
                arranged_problems = line1 + '\n' + line2 + '\n' + dashes + '\n' + solution
            else:
                arranged_problems = line1 + '\n' + line2 + '\n' + dashes
        
    else:
        return 'Error: Too many problems.'

    return arranged_problems

#print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))