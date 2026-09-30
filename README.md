# flakehunter-test-fixture

Throwaway repo for exercising FlakeHunter's ingestion pipeline. The "maybe flaky test" fails
roughly half the time; re-running the workflow on the same commit produces both a pass and a
fail on the same SHA, which is what FlakeHunter should flag as flaky.

Trigger a re-run on the same commit with:

```
gh workflow run test.yml
gh run rerun <run-id>
```
