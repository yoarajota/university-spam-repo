import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = process.env.EXPO_PUBLIC_PROJECT_URL;
const ANON_KEY = process.env.EXPO_PUBLIC_ANON_KEY;

const supabase = createClient(PROJECT_URL, ANON_KEY);

export const insertTask = async (name, description, date, time, callback) => {
  const { data, error } = await supabase
    .from("tasks")
    .insert([{ name, description, date, time }])
    .select("id")
    .single();
  if (error) console.log("Error inserting data", error);
  else {
    console.log("Data inserted successfully", data);
    callback && callback(data.id);
  }
};

export const insertTaskContact = async (task_id, contact_id) => {
  const { data, error } = await supabase
    .from("tasks_contacts")
    .insert([{ task_id, contact_id }]);
  if (error) console.log("Error inserting tasks_contacts", error);
  else console.log("tasks_contacts inserted successfully");
};

export const fetchTasksForList = async (setTasks) => {
  const { data, error } = await supabase.from("tasks").select("id, name");
  if (error) console.log("Error fetching tasks", error);
  else setTasks(data.map((item) => ({ id: item.id, name: item.name })));
};

export const fetchContactsForList = async (setContacts) => {
  const { data, error } = await supabase
    .from("contacts")
    .select("id, name, phone");
  if (error) console.log("Error fetching tasks", error);
  else setContacts(data);
};

export const deleteTask = async (id) => {
  const { data, error } = await supabase.from("tasks").delete().match({ id });
  if (error) console.log("Error deleting task", error);
  else console.log("Task deleted successfully");
};

export const deleteTaskContactsByTaskId = async (task_id) => {
  const { data, error } = await supabase
    .from("tasks_contacts")
    .delete()
    .match({ task_id });
  if (error) console.log("Error deleting TaskContacts", error);
  else console.log("TaskContacts deleted successfully");
};

export const deleteTaskContactsByContactId = async (contact_id) => {
  const { data, error } = await supabase
    .from("tasks_contacts")
    .delete()
    .match({ contact_id });
  if (error) console.log("Error deleting TaskContacts", error);
  else console.log("TaskContacts deleted successfully");
};

export const deleteContact = async (id) => {
  const { data, error } = await supabase
    .from("contacts")
    .delete()
    .match({ id });
  if (error) console.log("Error deleting task", error);
  else console.log("Contact deleted successfully");
};

export const updateTask = async (id, name, description, date, time) => {
  const { data, error } = await supabase
    .from("tasks")
    .update({ name, description, date, time })
    .match({ id });
  if (error) console.log("Error updating task", error);
  else console.log("Task updated successfully");
};

export const getTaskById = async (id, callback) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .match({ id })
    .single();
  if (error) console.log("Error fetching task", error);
  else {
    callback &&
      callback({
        name: data.name,
        description: data.description,
        date: data.date,
        time: data.time,
      });

    console.log("Task fetched successfully");
  }
};

export const getContactIdsByTaskId = async (task_id, callback) => {
  const { data, error } = await supabase
    .from("tasks_contacts")
    .select("contact_id")
    .match({ task_id });

  if (error) {
    console.log("Error fetching contact ids", error)
    } else {
    const ids = data.map((item) => item.contact_id);
    callback(ids);
  }
};

export const insertContact = async (name, email, phone) => {
  const { data, error } = await supabase
    .from("contacts")
    .insert([{ name, email, phone }]);

  if (error) console.log("Error inserting into Contacts", error);
  else console.log("Contact added successfully", data);
};
