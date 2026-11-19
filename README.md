# Study Studio — Business Statistics

An interactive, responsive study website prototype for BUSN 230 (Business Statistics).

## Run locally

No build step or dependencies are required. Open `index.html` in a browser, or serve the folder with any static web server.

For example:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Current features

- Business Statistics course dashboard and chapter roadmap.
- Chapter 7 lesson introducing one-sample hypothesis testing.
- Theory-first explanations: what a method does, why it exists, and when to use it.
- Hypothesis types: two-tailed, right-tailed, and left-tailed.
- Interactive Z-statistic experiment with sliders for sample mean, sample size, and known population standard deviation.
- Dynamic standard error, Z statistic, and visual marker.
- Knowledge-check question with immediate step-by-step feedback.
- Formula library cards with use cases and interpretation.
- Responsive layout for desktop and mobile.

## Course alignment and limitations

The course roadmap follows the BUSN 230 Fall 2026 syllabus:
- Chapter 7: Testing Hypotheses — One-Sample Tests.
- Chapter 8: Testing Hypotheses — Two-Sample Tests.
- Chapter 9: Testing Three or More Groups.
- Chapter 10: Correlation and Regression Analysis.

The uploaded Midterm Exam Formula Sheet covers the midterm's Chapters 1–6. It does not establish the exact Chapter 7 or Chapter 8 formula sheet. The Z-test simulator is explicitly supplemental and demonstrates the one-sample Z statistic for a population mean when the population standard deviation is known and test conditions are satisfied. The course's exact procedures should be checked against lecture notes and assigned material when available.

## Next development priorities

1. Add Chapter 7 decision process: hypotheses, significance level, test statistic, p-value/critical-value approach, decision, and interpretation.
2. Add t-test path for unknown population standard deviation, with conditions and degrees of freedom.
3. Expand one-sample tests for proportions if covered in class.
4. Add Chapter 8 independent-sample and paired-sample comparisons.
5. Add use-case decision trees and more practice question banks.
6. Add persistent progress storage and cumulative exam mode.
7. Add later courses as independent modules.

## Design principle

Every topic should teach:
1. Theory: what it means and why it exists.
2. Recognition: when the method is appropriate.
3. Visual intuition: what the math represents.
4. Formula: what each term means and why it is structured that way.
5. Worked example: calculation with reasoning.
6. Practice: active problem solving with feedback.
7. Interpretation: what the result means in context.
