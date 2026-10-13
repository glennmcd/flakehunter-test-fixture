# flakehunter-test-fixture

Throwaway repo for exercising FlakeHunter's ingestion pipeline. The "maybe flaky test" fails
roughly half the time; re-running the workflow on the same commit produces both a pass and a
fail on the same SHA, which is what FlakeHunter should flag as flaky.

Trigger a re-run on the same commit with:

```
gh workflow run test.yml
gh run rerun <run-id>
```

## Artifact

Each run uploads one artifact, `junit-results`, with several files so ingesters (the FlakeHunter
webhook and the `flakehunter_ingest` Airflow DAG) are exercised on every shape they must handle:

| File | Source | Shape |
|---|---|---|
| `flaky.xml` | `tests/flaky.test.ts` (vitest) | `<testsuites>` root |
| `unit/math.xml` | `tests/unit/` (vitest) | `<testsuites>` root, in a subdirectory |
| `legacy-testsuite.xml` | `fixtures/legacy-testsuite.xml`, copied in CI | bare `<testsuite>` root, Maven style |
| `notes.txt` | written in CI | not XML; must be skipped |

Run the tests locally with `bun run test`; results land in `test-results/`.

## License

[MIT](LICENSE).
