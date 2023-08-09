# intl-tel-data

This package contains only the data from [intl-tel-input](https://github.com/jackocnr/intl-tel-input) with a few utility methods.
This package is intended to be used for implementing a telephone country code selection into any select component in any framework of your choice.

It is recommended to index your select by the ISO2 code and then convert that accordingly because there are multiple countries with the same calling code. `+1`, for example, is a popular one.
Of course you could also use the `filteredCountryCallingCodeList` method to exclude the countries you don't care about.

## CSS usage guide
1. Import the CSS from `intl-tel-data/dist/style.css`. `.scss` is also available.
2. For country flag element, add the class `country-code__flag country-code__<iso 2 code>`, where the `iso 2 code` is a country code.

Example: `<div class="country-code__flag country-code__ee"></div>` will display an Estonian flag.

## Exported properties
```ts
/**
 * Country calling code type.
 */
interface CountryData {
  [x: string]: string | number | string[] | undefined;
  name: string;
  iso2: string;
  code: string;
  priority: number;
  areaCodes?: string[];
}
/**
 * Country calling code list. Ordered by country name (English)
 */
const countryCallingCodeList: CountryData[];
/**
 * Sort the country calling code list by a specific field
 * @param field Field to sort the calling codes by
 * @param locale Locale to sort the field by, defaults to `et`
 * @param direction Sort in this direction. `-1` is descending, `1` is ascending (default)
 * @param array Optionally pass an already modified array of calling codes
 * @returns Sorted country calling code list
 */
const orderedCountryCallingCodeList: (field?: 'name' | 'iso2' | 'code', locale?: string, direction?: 1 | -1, array?: CountryData[]) => CountryData[];
/**
 * Create a preferred ordering of the country list
 * @param preferredOrder Array of ISO2 codes in your preferred order
 * @param array Optionally pass an already modified array of calling codes
 * @returns Array with the first index being the preferred options and the second index being the rest.
 */
const preferredOrderCountryCallingCodeList: (preferredOrder: string[], array?: CountryData[]) => CountryData[][];
/**
 * Translate the country calling code list using a dictionary object
 * @param translations ISO2 code to country name dictionary
 * @param array Optionally pass an already modified array of calling codes
 * @returns Translated country calling code list
 */
const translatedCountryCallingCodeList: (translations: {
    [x: string]: string;
}, array?: CountryData[]) => CountryData[];
/**
 * Filter country calling code list based on exclude or include array
 * @param exclude List of ISO2 codes to exclude (optional)
 * @param include List of ISO2 codes to include (optional)
 * @param array Optionally pass an already modified array of calling codes
 * @returns Filtered list
 */
const filteredCountryCallingCodeList: (exclude?: string[], include?: string[], array?: CountryData[]) => CountryData[];
/**
 * Get the full country calling information for any given ISO2 code
 * @param iso2 ISO2 country code
 * @returns CallingCode object
 */
const getCountryByISO2: (iso2?: string) => CountryData | null | undefined;
/**
 * Get the first country calling information for any given calling code
 * @param code calling code
 * @returns CallingCode object
 */
const getCountryByCallingCode: (code?: string | number) => CountryData | null | undefined;
/**
 * Get the calling code for any given ISO2 country code
 * @param iso2 ISO2 country code
 * @returns Calling code
 */
const getCallingCodeByISO2: (iso2?: string) => string | undefined;
/**
 * Get the ISO2 country code for any given calling code
 * @param code Calling code
 * @returns ISO2 country code
 */
const getISO2ByCallingCode: (code?: string | number) => string | undefined;

```
