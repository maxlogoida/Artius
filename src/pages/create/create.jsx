import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

import AddBlogImg from '../../assets/Banner.png';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { fileEditorConfig } from '../../constants';
import { CreateContainer, CreateForm } from './styles';

const Create = () => {
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
    console.log('Form submitted:', formState);

    setFormState({
      imageUrl: '',
      title: '',
      category: '',
      content: '',
    });
  };

  return (
    <CreateContainer>
      <div>
        <img src={AddBlogImg} alt="AddBlogImg" />
        <h3>Add Blog</h3>
      </div>
      <CreateForm>
        <div>
          <Input
            type="text"
            placeholder="Image url"
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
              <img src={formState.imageUrl} alt={formState.title} />
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
