import React, { useState } from 'react'

function TodoList() {
    const [todo, settodo] = useState([]);

    return (
        <>
            <div
                className="container"
            >
                <div className="row">

                    <form class="d-flex">
                        <div class="col">
                            <div class="mb-3">
                                <label for="" class="form-label">Inline Form</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                >
                                    Tạo mới
                                </button>

                            </div>
                        </div>
                    </form>

                    <div
                        class="table-responsive"
                    >
                        <table
                            class="table table-primary"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên công việc</th>
                                    <th scope="col">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todo.map((index) => {
                                    <tr class="">
                                        <td scope="row">Item</td>
                                        <td>Item</td>
                                        <td>Item</td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
    )
}

export default TodoList