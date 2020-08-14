export interface Exercise {
    name: string;
    type: string;
    description: string;
    exercise_phase: number;
    exercise_video_link: string;
}
export interface Order {
    client_id: string;
    order_length: number
    exercise_goal: string;
    general_experience: string;
    barbell_experiance: string;
    injuries: string;
    test_results: string;
    additional_notes: string;
}
export interface User {
    email: string;
    googleToken: string;
    name: string;
  }