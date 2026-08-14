# Windows Nginx deployment

The production site is served at `https://hzhtechco.site/rehab-with-kiran/`.

## Build locally

From the repository directory, run:

```powershell
npm ci
$env:CI='true'
npm test
npm run build
```

The generated `build/index.html` should reference assets under
`/rehab-with-kiran/`.

## Copy through RDP

On the VPS, create `C:\nginx\html\rehab-with-kiran` if needed. Replace the
contents of that directory with the **contents** of the local `build` directory.
Do not copy the `build` directory as an additional nested folder.

## Configure Nginx

Copy the two `location` blocks from `deploy/nginx-rehab.conf` into the existing
HTTPS `server` block for `hzhtechco.site`. Do not replace the full server block,
because its current root-site and TLS settings must remain in place.

From an elevated PowerShell window in `C:\nginx`, validate and reload Nginx:

```powershell
.\nginx.exe -t
.\nginx.exe -s reload
```

The reload command should only be run after the configuration test succeeds.

## Smoke test

Open these URLs in a browser:

- `https://hzhtechco.site/rehab-with-kiran/`
- `https://hzhtechco.site/rehab-with-kiran/#/appointment`
- `https://hzhtechco.site/rehab-with-kiran/#/story`
- `https://hzhtechco.site/rehab-with-kiran/#/blogs`
- `https://hzhtechco.site/rehab-with-kiran/#/contact`

Also check that `https://hzhtechco.site/rehab-with-kiran` redirects to the URL
with the trailing slash and that the domain root still serves its existing site.

The admin page's private `192.168.1.10` API is not part of this deployment and
will not work for public visitors.
