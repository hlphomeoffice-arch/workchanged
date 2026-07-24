# Security policy

## Supported version

Security fixes are applied to the current `main` branch and to open launch pull
requests.

## Reporting a concern

Do not open a public issue containing credentials, personal information or a
working exploit. Repository collaborators should use GitHub's private security
advisory flow. If that is unavailable, contact the repository owner privately.

Include the affected route or file, impact, reproduction steps and any suggested
mitigation. Do not include real user data.

## Operating rules

- Secrets belong in the hosting platform's encrypted environment, never in Git.
- New forms, databases, authentication, analytics and third-party scripts
  require a privacy and threat review before launch.
- Dependency updates must pass the production build, lint and rendered-route
  tests before merge.
- Material security fixes should include a regression test where practical.
