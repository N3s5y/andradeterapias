/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Request type for appointment form
 */
export interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  message?: string;
}

/**
 * Response type for appointment form submission
 */
export interface AppointmentResponse {
  success: boolean;
  message: string;
  errors?: any[];
}
