import { Form, Formik } from 'formik';
import { createTaskRequest } from '../api/tasks.api.js'


function TaskForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: "",


                }}
                onSubmit={async (values,actions) => {


                    try {
                        const response = await createTaskRequest(values);
                        console.log(response);
                        actions.resetForm();
                    } catch (error) {
                        console.error(error);
                    }

                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>title</label>
                        <input type="text" name='title'
                            placeholder='Write a type'
                            onChange={handleChange} 
                            value={values.title}
                            />

                        <label>description</label>
                        <textarea
                            name='description'
                            rows='3'
                            placeholder='Write a description'
                            onChange={handleChange}
                            value = {values.description}
                        ></textarea>

                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>

                    </Form>

                )}

            </Formik>
        </div>
    )
}


export default TaskForm