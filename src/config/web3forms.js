/**
 * Web3Forms Configuration
 * Key provided: eb48d953-dfbe-4798-9aa7-bceafcd926f6
 */
export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'eb48d953-dfbe-4798-9aa7-bceafcd926f6';

/**
 * Submit form data to Web3Forms API using standard FormData
 * @param {Record<string, any>} formFields 
 * @param {string} subject 
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export async function submitToWeb3Forms(formFields, subject = 'New Submission from Kids Zone') {
  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', subject);
  formData.append('from_name', 'Kids Zone School Website');

  for (const [key, value] of Object.entries(formFields)) {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  return result;
}
