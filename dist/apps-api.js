import { requestJson, requestVoid } from './http.js';
import { createUrlBuilder } from './url.js';
export function createFlyntlyAppsApi(config) {
    const buildAppsUrl = createUrlBuilder(config.chatApiUrl);
    return {
        buildAppsUrl,
        listCatalog: (token) => requestJson(buildAppsUrl('/apps/catalog'), {
            token,
            fallbackError: 'Failed to load app catalog',
        }),
        listInstallations: (token) => requestJson(buildAppsUrl('/apps/installations'), {
            token,
            fallbackError: 'Failed to load app installations',
        }),
        createGitHubInstallUrl: (token) => requestJson(buildAppsUrl('/apps/github/install-url'), {
            method: 'POST',
            token,
            fallbackError: 'Failed to start GitHub installation',
        }),
        completeGitHubInstall: ({ token, body }) => requestJson(buildAppsUrl('/apps/github/complete'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to finish GitHub installation',
        }),
        listGitHubRepositories: ({ token, installationId }) => requestJson(buildAppsUrl(`/apps/github/installations/${installationId}/repositories`), {
            token,
            fallbackError: 'Failed to load GitHub repositories',
        }),
        saveGitHubSubscriptions: ({ token, body }) => requestJson(buildAppsUrl('/apps/github/subscriptions'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to save GitHub subscriptions',
        }),
        deleteGitHubSubscription: ({ token, subscriptionId }) => requestVoid(buildAppsUrl(`/apps/github/subscriptions/${subscriptionId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove GitHub subscription',
        }),
        deleteGitHubRoute: ({ token, routeId }) => requestVoid(buildAppsUrl(`/apps/github/routes/${routeId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove GitHub route',
        }),
        createGoogleDriveInstallUrl: (token) => requestJson(buildAppsUrl('/apps/google-drive/install-url'), {
            method: 'POST',
            token,
            fallbackError: 'Failed to start Google Drive installation',
        }),
        completeGoogleDriveInstall: ({ token, body }) => requestJson(buildAppsUrl('/apps/google-drive/complete'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to finish Google Drive installation',
        }),
        listGoogleDriveResources: ({ token, installationId }) => requestJson(buildAppsUrl(`/apps/google-drive/installations/${installationId}/resources`), {
            token,
            fallbackError: 'Failed to load Google Drive resources',
        }),
        saveGoogleDriveSubscriptions: ({ token, body }) => requestJson(buildAppsUrl('/apps/google-drive/subscriptions'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to save Google Drive subscriptions',
        }),
        deleteGoogleDriveSubscription: ({ token, subscriptionId }) => requestVoid(buildAppsUrl(`/apps/google-drive/subscriptions/${subscriptionId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Google Drive subscription',
        }),
        deleteGoogleDriveRoute: ({ token, routeId }) => requestVoid(buildAppsUrl(`/apps/google-drive/routes/${routeId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Google Drive route',
        }),
        createGoogleCalendarInstallUrl: (token) => requestJson(buildAppsUrl('/apps/google-calendar/install-url'), {
            method: 'POST',
            token,
            fallbackError: 'Failed to start Google Calendar installation',
        }),
        completeGoogleCalendarInstall: ({ token, body }) => requestJson(buildAppsUrl('/apps/google-calendar/complete'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to finish Google Calendar installation',
        }),
        listGoogleCalendars: ({ token, installationId }) => requestJson(buildAppsUrl(`/apps/google-calendar/installations/${installationId}/calendars`), {
            token,
            fallbackError: 'Failed to load Google calendars',
        }),
        saveGoogleCalendarSubscriptions: ({ token, body }) => requestJson(buildAppsUrl('/apps/google-calendar/subscriptions'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to save Google Calendar subscriptions',
        }),
        deleteGoogleCalendarSubscription: ({ token, subscriptionId }) => requestVoid(buildAppsUrl(`/apps/google-calendar/subscriptions/${subscriptionId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Google Calendar subscription',
        }),
        deleteGoogleCalendarRoute: ({ token, routeId }) => requestVoid(buildAppsUrl(`/apps/google-calendar/routes/${routeId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Google Calendar route',
        }),
        createVercelInstallUrl: (token) => requestJson(buildAppsUrl('/apps/vercel/install-url'), {
            method: 'POST',
            token,
            fallbackError: 'Failed to start Vercel installation',
        }),
        completeVercelInstall: ({ token, body }) => requestJson(buildAppsUrl('/apps/vercel/complete'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to finish Vercel installation',
        }),
        listVercelProjects: ({ token, installationId }) => requestJson(buildAppsUrl(`/apps/vercel/installations/${installationId}/projects`), {
            token,
            fallbackError: 'Failed to load Vercel projects',
        }),
        saveVercelSubscriptions: ({ token, body }) => requestJson(buildAppsUrl('/apps/vercel/subscriptions'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to save Vercel subscriptions',
        }),
        deleteVercelSubscription: ({ token, subscriptionId }) => requestVoid(buildAppsUrl(`/apps/vercel/subscriptions/${subscriptionId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Vercel subscription',
        }),
        deleteVercelRoute: ({ token, routeId }) => requestVoid(buildAppsUrl(`/apps/vercel/routes/${routeId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Vercel route',
        }),
        createRailwayInstallUrl: (token) => requestJson(buildAppsUrl('/apps/railway/install-url'), {
            method: 'POST',
            token,
            fallbackError: 'Failed to start Railway installation',
        }),
        completeRailwayInstall: ({ token, body }) => requestJson(buildAppsUrl('/apps/railway/complete'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to finish Railway installation',
        }),
        listRailwayProjects: ({ token, installationId }) => requestJson(buildAppsUrl(`/apps/railway/installations/${installationId}/projects`), {
            token,
            fallbackError: 'Failed to load Railway projects',
        }),
        saveRailwaySubscriptions: ({ token, body }) => requestJson(buildAppsUrl('/apps/railway/subscriptions'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to save Railway subscriptions',
        }),
        deleteRailwaySubscription: ({ token, subscriptionId }) => requestVoid(buildAppsUrl(`/apps/railway/subscriptions/${subscriptionId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Railway subscription',
        }),
        deleteRailwayRoute: ({ token, routeId }) => requestVoid(buildAppsUrl(`/apps/railway/routes/${routeId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Railway route',
        }),
        createTrelloInstallUrl: (token) => requestJson(buildAppsUrl('/apps/trello/install-url'), {
            method: 'POST',
            token,
            fallbackError: 'Failed to start Trello installation',
        }),
        completeTrelloInstall: ({ token, body }) => requestJson(buildAppsUrl('/apps/trello/complete'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to finish Trello installation',
        }),
        listTrelloBoards: ({ token, installationId }) => requestJson(buildAppsUrl(`/apps/trello/installations/${installationId}/boards`), {
            token,
            fallbackError: 'Failed to load Trello boards',
        }),
        saveTrelloSubscriptions: ({ token, body }) => requestJson(buildAppsUrl('/apps/trello/subscriptions'), {
            method: 'POST',
            token,
            body,
            fallbackError: 'Failed to save Trello subscriptions',
        }),
        deleteTrelloSubscription: ({ token, subscriptionId }) => requestVoid(buildAppsUrl(`/apps/trello/subscriptions/${subscriptionId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Trello subscription',
        }),
        deleteTrelloRoute: ({ token, routeId }) => requestVoid(buildAppsUrl(`/apps/trello/routes/${routeId}`), {
            method: 'DELETE',
            token,
            fallbackError: 'Failed to remove Trello route',
        }),
    };
}
//# sourceMappingURL=apps-api.js.map