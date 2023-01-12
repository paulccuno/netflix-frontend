export const landing = '/';

export const login = '/login';

export const profileSelection = '/profile-selection';
export const profileUpdate = '/profile-update';

export const catalog = '/catalog';

export const movieDetail = (id = ':id') => `${catalog}/${id}`;
