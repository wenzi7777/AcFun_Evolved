import {v4} from 'uuid';

/**
 * 生成uuid v4
 * @returns {`${string}-${string}-${string}-${string}-${string}`|*|string}
 */
export const uuidV4 = () => {
    return v4();
}