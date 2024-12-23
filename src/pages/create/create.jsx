import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

import AddBlogImg from '../../assets/Banner.png';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { fileEditorConfig } from '../../constants';
import useLocalStorage from '../../hooks/useLocalStorage';
import usePosts from '../../hooks/usePosts';
import { CreateContainer, CreateForm } from './styles';

const Create = () => {
  const { addPost } = usePosts();

  const { value: users } = useLocalStorage('users', []);

  const profileName = users.length > 0 ? users[0].username : 'Anonymous';

  const [formState, setFormState] = useState({
    imageUrl: '',
    title: '',
    category: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (content) => {
    setFormState((prevState) => ({
      ...prevState,
      content: content,
    }));
  };

  const handleSubmit = () => {
    if (!formState.imageUrl || !formState.title || !formState.category || !formState.content) {
      alert('All fields are required!');
      return;
    }

    const newPost = {
      id: Date.now(),
      img: formState.imageUrl,
      category: formState.category,
      title: formState.title,
      author: profileName,
      date: new Date().toLocaleDateString(),
      description: formState.content,
    };

    addPost(newPost);

    setFormState({
      imageUrl: '',
      title: '',
      category: '',
      content: '',
    });

    console.log('Post created:', newPost);
  };

  return (
    <CreateContainer>
      <div>
        <img src={AddBlogImg} alt="Add Blog" />
        <h3>Add Blog</h3>
      </div>
      <CreateForm>
        <div>
          <Input
            type="text"
            placeholder="Image URL"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleInputChange}
          />
          <Input type="text" placeholder="Title" name="title" value={formState.title} onChange={handleInputChange} />
          <Input
            type="text"
            placeholder="Category"
            name="category"
            value={formState.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="secondFormContainer">
          <div>
            <div className="formImgBackground">
              {formState.imageUrl && <img src={formState.imageUrl} alt={formState.title} />}
            </div>
          </div>
          <div>
            <Editor
              apiKey="rdi2p52nbmee8mzxz8c5wcv41s010h257mrlbmshdl9puohk"
              data-testid="editor"
              init={{
                height: 400,
                menubar: true,
                resize: false,
                placeholder: 'Enter your content here...',
                plugins: fileEditorConfig.plugins.join(' '),
                toolbar: fileEditorConfig.toolbar.join(' | '),
                content_style:
                  '@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;800&display=swap"); body { font-family:Rubik; font-size:14px }',
                font_family_formats: Object.entries(fileEditorConfig.fonts)
                  .map((entry) => entry.join('='))
                  .join('; '),
              }}
              onEditorChange={handleEditorChange}
              value={formState.content}
            />
          </div>
        </div>
      </CreateForm>
      <div className="button">
        <Button onClick={handleSubmit}>Create</Button>
      </div>
    </CreateContainer>
  );
};

export default Create;
